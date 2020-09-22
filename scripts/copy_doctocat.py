#!/usr/bin/env python3

from os.path import normpath
from pathlib import Path, PurePath
import re
from shutil import copy2

rel_path = PurePath('@primer/gatsby-theme-doctocat/src/components')


def replace(obj: re.Match) -> str:
    a, b = obj.groups()

    if b.startswith('.'):
        b = normpath((rel_path / b).as_posix())

    return f"import {a} from '{b}'"


def rel_abs_path(path: Path):
    text = path.read_text(encoding='utf-8')
    text = re.sub("import (.*?) from '(.*?)'", replace, text)
    path.write_text(text, encoding='utf-8')


def run():
    current_dir = Path(__file__).resolve().parents[1]
    from_dir = current_dir / 'node_modules/@primer/gatsby-theme-doctocat/src/components'
    to_dir = current_dir / 'src/@primer/gatsby-theme-doctocat/components'

    for f in ('header.js', 'search.js'):
        copy2(from_dir / f, to_dir / f)
        rel_abs_path(to_dir / f)


if __name__ == '__main__':
    run()
