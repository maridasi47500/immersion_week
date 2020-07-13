#!/bin/sh 
rockPaperScissors(){
local y=$1
local z=$2
if y == z
then 
	echo "Draw"
else
	if y == "paper"
	then
		if z == "rock"
		then
			echo "First player wins"
		else
			echo "Second player wins"
		fi
        elif y == "scissors"
	then
		if z == "paper"
		then

			echo "First player wins"
		else
			echo "Second player wins"
		fi
        elif y == "rock"
	then
		if z == "scissors"
		then
			echo "First player wins"
		else
			echo "Second player wins"
		fi
	fi
fi
}

rockPaperScissors
rockPaperScissors
