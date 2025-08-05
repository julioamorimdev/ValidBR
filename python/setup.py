from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="validbr",
    version="1.0.0",
    author="ValidBR Team",
    author_email="support@validbr.com",
    description="A comprehensive Brazilian validation library for Python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/validbr/validbr",
    packages=find_packages(),
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Text Processing :: Filters",
    ],
    python_requires=">=3.7",
    install_requires=[
        "requests>=2.25.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0.0",
            "pytest-cov>=2.10.0",
            "black>=21.0.0",
            "flake8>=3.8.0",
            "mypy>=0.800",
        ],
    },
    keywords=[
        "brazil",
        "validation",
        "cpf",
        "cnpj",
        "cep",
        "phone",
        "email",
        "rg",
        "ie",
        "ddd",
        "mask",
        "sanitize",
    ],
    project_urls={
        "Bug Reports": "https://github.com/validbr/validbr/issues",
        "Source": "https://github.com/validbr/validbr",
        "Documentation": "https://docs.validbr.com",
    },
) 