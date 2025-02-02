import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:river_pod/provider/cart_provider.dart';
import 'package:river_pod/provider/product_provider.dart';
import 'package:river_pod/shared/cart_icon.dart';

class HomeScreen extends ConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final allProducts = ref.watch(productsProvider);
    final cartProducts = ref.watch(cartNotifierProvider);
    return Scaffold(
      appBar: AppBar(title: const Text("Garage Sale Product"), actions: const [
        CartIcon(),
      ]),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: GridView.builder(
            itemCount: allProducts.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisSpacing: 20,
                crossAxisSpacing: 20,
                childAspectRatio: 0.9),
            itemBuilder: (context, index) {
              return Container(
                padding: const EdgeInsets.only(top: 20, right: 20, left: 20),
                color: Colors.blueGrey.withOpacity(0.05),
                child: Column(
                  children: [
                    Image.asset(
                      allProducts[index].image,
                      width: 60,
                      height: 60,
                    ),
                    Text(allProducts[index].title),
                    Text('"\$"${allProducts[index].price.toString()}'),
                    const SizedBox(height: 10),
                    if (!cartProducts.contains(allProducts[index]))
                      TextButton(
                          onPressed: () => {
                                ref
                                    .read(cartNotifierProvider.notifier)
                                    .addProduct(allProducts[index])
                              },
                          child: const Text("Add to cart"))
                    else if (cartProducts.contains(allProducts[index]))
                      TextButton(
                          onPressed: () => {
                                ref
                                    .read(cartNotifierProvider.notifier)
                                    .removeProduct(allProducts[index])
                              },
                          child: const Text("Remove"))
                  ],
                ),
              );
            }),
      ),
    );
  }
}
