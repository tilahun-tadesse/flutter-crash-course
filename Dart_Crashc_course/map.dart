void main() {
  // var gift = Map<String, String>{

  // };
  // gift['first'] = 'first';
  // gift['second'] = 'second';
  // print(gift.length);
  // g
  final retrun = greeting(age: 23);
  print(retrun);
}

greeting({String? name, age}) {
  List<int> score = [1, 2, 3, 4, 5];
  score.add(43);
  score.addAll([1, 2, 3, 4, 5]);
  score.remove(3);

  // ignore: unused_local_variable
  List<dynamic> score2 = [1, 2, 3, 4, 5];
  return (int.parse(name!) + age);
}
