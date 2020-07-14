fresh(){
   # t stores $1 argument passed to fresh()
   t=$1
   u=$2

if [ "$t" = "$u" ]; then
    echo "Draw"
elif [ "$t" = "paper" ]; then

    [ "$u" = "rock" ] && echo "First player wins" || echo "Second player wins"
elif [ "$t" = "scissors" ]; then

    [[ "$u" == "paper" ]] && echo "First player wins" || echo "Second player wins"
elif [ "$t" = "rock" ]; then

    [[ "$u" == "scissors" ]] && echo "First player wins" || echo "Second player wins"
fi
}
 
# invoke the function with "Tomato" argument
echo "**** calling fresh() 1st time ****"
fresh rock rock
 
# invoke the function with total 3 arguments
echo "**** calling fresh() 2nd time ****"
fresh paper scissors
