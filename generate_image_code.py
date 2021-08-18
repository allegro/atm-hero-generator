import argparse
import os


def get_sorted_dir_content(path):
    dir_content = [d for d in os.listdir(path) if not d.startswith(".")]
    return sorted(dir_content)


def get_body_parts_files(path):
    body_parts_dirs_content = get_sorted_dir_content(path)

    body_parts = {}
    for directory in body_parts_dirs_content:
        body_part_name = directory[2:]
        body_parts[body_part_name] = {}
        variants_files = get_sorted_dir_content(f"{path}/{directory}")

        for file in variants_files:
            import_path = f"./images/{directory}/{file}"
            variant_name = file[2:][:-4]
            body_parts[body_part_name][variant_name] = import_path

    return body_parts


def generate_imports(body_parts):
    imports = []
    for variants in body_parts.values():
        for variant_name, path in variants.items():
            imports.append(f'import {variant_name} from "{path}";')

    return imports


def print_imports(imports):
    for i in imports:
        print(i)


def print_images_object_def(body_parts):
    print("const BodyParts = {")
    for body_part, variants in body_parts.items():
        print(f"  {body_part}: " + "{")
        for variant in variants:
            print(f"    {variant}: createImage({variant}),")
        print("  },")
    print("}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--path-to-gfx", default=".")
    args = parser.parse_args()

    body_parts = get_body_parts_files(args.path_to_gfx)
    imports = generate_imports(body_parts)

    print_imports(imports)
    print()
    print_images_object_def(body_parts)
