== STATEMENT
$Jump({
  type: CONT | BREAK | YIELD | RETURN | THROW
})
$If({
  arg,
  then,
  other,
})
$Switch({
  arg,
  blocks,
})

$Throw
$Try({
  block,
  then,
  other,
})

$Assign({
  type: CONST | LET ¦ VAR,
  dest,
  block,
})

$Loop({
  
})

== EXPRESSION
This
Super

Func
Arr
Obj
Regex
Group

New
Spread

Op

Arith

In
InstOf
Cmp
