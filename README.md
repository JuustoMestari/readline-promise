# readline-promise
Test case for readline
Build : yarn build
Run: yarn start

See input/input.example has an extra line at the end.
The code output should be :
START
line1
line2
line3
line4
DONE

for some reason, the code stops after the last line is read, DONE is not printed.
Works fine when removing the extra line at the end of the test file.