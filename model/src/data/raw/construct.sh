cat rawCodes.txt | awk -F" " '{print $1}' | awk -v FS="" '{print "[["$1","$2","$3","$4"],["$5","$6","$7","$8"],["$9","$10","$11","$12"],["$13","$14","$15","$16"]]"}' > question.arrs
cat rawCodes.txt | awk -F" " '{print $2}' | awk -v FS="" '{print "[["$1","$2","$3","$4"],["$5","$6","$7","$8"],["$9","$10","$11","$12"],["$13","$14","$15","$16"]]"}' > answer.arrs