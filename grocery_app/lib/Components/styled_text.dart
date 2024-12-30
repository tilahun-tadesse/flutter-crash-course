import 'package:flutter/material.dart';

class Text_Component extends StatelessWidget {
  final String text;
  final TextStyle? style;
  const Text_Component({
    super.key,
    required this.text,
    this.style,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: style ??
          const TextStyle(
              color: Colors.brown,
              fontSize: 20,
              fontFamily: 'Pacifico',
              fontWeight: FontWeight.bold),
    );
  }
}
