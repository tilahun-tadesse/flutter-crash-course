class Num {
  int num = 0;
}

void main() {
  // stdout.write("Enter your name: ");
  // String? name = stdin.readLineSync();
  // print("Hello $name");
  // var nb = Num();
  // int num = int.parse("3");
  // assert(num == 3);
  // print(num.isEven);
  // String gg = 1.toString();
  // var abebe = num ??= 10;
  // print(abebe);

  print(dum(
    2,
  ));
}

///collection of objects
///set is the unique collection of items
///map is the collection of key value pairs or it is a dictionary
///named parameter and positional parameter

dynamic dum(var num1, {var num2}) {
  return num1 + (num2 ?? 0);
}
