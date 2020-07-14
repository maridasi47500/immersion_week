#myscript.sh
var1='ada'
var2='lovelace'

james_bond(){
  #Note the $1 and $2 variables here are not the same of the
  #main script... 
  echo "My name is $2, $1 $2"

}

james_bond $var1 $var2
