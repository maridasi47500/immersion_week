#!/bin/sh
touch this_file_is_private
chmod u+rw,g-rwx,o-rwx this_file_is_private

ls -l this_file_is_private

