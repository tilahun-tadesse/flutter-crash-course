import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:river_pod/provider/cart_provider.dart';
import 'package:river_pod/screens/cart/cart_screen.dart';

class CartIcon extends ConsumerStatefulWidget {
  const CartIcon({super.key});

  @override
  ConsumerState<CartIcon> createState() => _CartIconState();
}

class _CartIconState extends ConsumerState<CartIcon> {
  @override
  Widget build(BuildContext context) {
    final cartProducts = ref.watch(cartTotalProcutProvider);
    return Stack(
      children: [
        IconButton(
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => const CartScreen()));
            },
            icon: const Icon(Icons.shopping_bag_outlined)),
        Positioned(
          top: 5,
          left: 5,
          child: Container(
            width: 18,
            height: 18,
            alignment: Alignment.center,
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: Colors.blueAccent),
            child: Text(
              cartProducts.toString(),
              style: const TextStyle(
                color: Colors.white,
                fontSize: 12,
              ),
            ),
          ),
        )
      ],
    );
  }
}
