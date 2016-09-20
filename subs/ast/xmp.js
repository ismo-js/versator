== STATEMENT
$Jump({
  type: CONT | BREAK | YIELD | RETURN | THROW
})
$If({
  cond,
  then,
  other,
})
$Switch({
  cond,
  blocks,
})

$Throw
$Try({
  block,
  then,
  other,
})

$Assign({
  type: CONST | LET | VAR,
  dest,
  block,
})

$Loop({
  type: DO_WHILE | FOR | WHILE,
  init,
  cond,
  step,
  then,
})
$Walk({
  comp: Type,
  then,
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
