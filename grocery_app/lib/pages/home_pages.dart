import 'package:flutter/material.dart';
import 'package:grocery_app/widgets/widget_category_home.dart';

class HomePages extends StatelessWidget {
  const HomePages({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(child: Text("Grocery App")),
      ),
      body: Container(
        child: ListView(
          children: const [
            HomeCategory(),
          ],
        ),
      ),
    );
  }
}
