#!/bin/bash

export QA_RPATHS=$((0x0001 | 0x0002 | 0x0010))

npm run make