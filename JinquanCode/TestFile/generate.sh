#!/bin/bash
# This shell code is just used to generate the resource file
# with the ./output

declare -i i=1

while ((i<=50))
do
	rm ${i}M.html
	./output ${i} > ${i}M.html
	let ++i
done

