import 'package:coffe_card/Components/styled_text.dart';
import 'package:coffe_card/Home/coffee_pref.dart';
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Coffe Card"),
          backgroundColor: Colors.brown[600],
          centerTitle: true,
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              color: Colors.brown[300],
              width: 200,
              child: const Text_Component("Coffe Card"),
            ),
            const SizedBox(height: 20),
            Container(
              color: Colors.brown[200],
              width: 200,
              child: const CoffeePref(),
            ),
            Expanded(
                child: Image.asset(
              'assets/images/coffee_bg.jpg',
              fit: BoxFit.fitWidth,
              alignment: Alignment.bottomCenter,
            ))
          ],
        ));
  }
}
