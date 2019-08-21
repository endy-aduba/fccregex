//some files and modules are rather large, and you may only need certain code from those external resources. So there comes import. With import, we can choose which parts of a module or file to load into a given file, saving time and memory!!!
"use strict";
capitalizeString("hello!");
//here, let us say the name of the file is called string_functions in the current directory
import { capitalizeString } from "string_functions"