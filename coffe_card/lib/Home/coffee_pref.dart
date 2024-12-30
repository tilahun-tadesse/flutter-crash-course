import 'package:coffe_card/Components/styled_button.dart';
import 'package:flutter/material.dart';

class CoffeePref extends StatefulWidget {
  const CoffeePref({super.key});

  @override
  State<CoffeePref> createState() => _CoffeePrefState();
}

class _CoffeePrefState extends State<CoffeePref> {
  int stength = 0;
  int sugar = 0;
  void increaseStrenght() {
    print("Strenght: $stength");
    setState(() {
      stength++;
    });
  }

  void increaseSugar() {
    print("Sugar: $sugar");
    setState(() {
      sugar++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            const Text("Strenght:"),
            Text(stength.toString()),
            for (int x = 0; x < stength; x++)
              Image.asset(
                "assets/images/coffee_bean.png",
                width: 20,
                color: Colors.brown[200],
                colorBlendMode: BlendMode.multiply,
              ),
            const Expanded(child: SizedBox()),
            StyledButton(onPressed: increaseStrenght, child: const Text("+"))
          ],
        ),
        Row(
          children: [
            const Text("Sugar:"),
            for (int x = 0; x < sugar; x++)
              Image.asset(
                'assets/images/sugar_cube.png',
                width: 20,
                color: Colors.brown[200],
                colorBlendMode: BlendMode.multiply,
              ),
            const Expanded(child: SizedBox()),
            StyledButton(onPressed: increaseSugar, child: const Text("+"))
          ],
        )
      ],
    );
  }
}
