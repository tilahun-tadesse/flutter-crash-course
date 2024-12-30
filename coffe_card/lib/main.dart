import 'package:coffe_card/Home/home.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Home(),
  ));
}

class SnadBox extends StatelessWidget {
  const SnadBox({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("SnadBox"),
          backgroundColor: Colors.cyan[600],
        ),
        body: Row(
          children: [
            container1(),
            container2(),
            container3(),
          ],
        ));
  }
}

Widget container1() {
  return Container(
    color: Colors.brown[400],
    width: 20,
    height: 40,
    padding: const EdgeInsets.all(30),
    margin: const EdgeInsets.fromLTRB(10, 20, 0, 45),
    child: const Text(
      "heelo world of this flutter app the best app",
      style: TextStyle(
        color: Color.fromARGB(255, 212, 152, 0),
      ),
    ),
  );
}

Widget container2() {
  return Container(
    color: Colors.amber[400],
    width: 20,
    height: 40,
    padding: const EdgeInsets.all(30),
    margin: const EdgeInsets.fromLTRB(10, 20, 0, 45),
    child: const Text(
      "heelo world of this flutter app the best app",
      style: TextStyle(
        color: Color.fromARGB(255, 212, 152, 0),
      ),
    ),
  );
}

Widget container3() {
  return Container(
    color: Colors.purple[400],
    width: 20,
    height: 40,
    padding: const EdgeInsets.all(30),
    margin: const EdgeInsets.fromLTRB(10, 20, 0, 45),
    child: const Text(
      "heelo world of this flutter app the best app",
      style: TextStyle(
        color: Color.fromARGB(255, 212, 152, 0),
      ),
    ),
  );
}
