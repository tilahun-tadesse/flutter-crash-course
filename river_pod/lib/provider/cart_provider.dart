import 'package:river_pod/models/product.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'cart_provider.g.dart';

// Generated notifier providers

@riverpod
class CartNotifier extends _$CartNotifier {
  @override
  Set<Product> build() {
    return {};
  }

  void addProduct(Product product) {
    if (!state.contains(product)) {
      state = {...state, product};
    }
  }

  void removeProduct(Product product) {
    if (state.contains(product)) {
      state = state.where((p) => p.id != product.id).toSet();
    }
  }
}

@riverpod
int cartTotal(ref) {
  final cartProducrt = ref.watch(cartNotifierProvider);
  int total = 0;

  for (Product product in cartProducrt) {
    total += product.price;
  }

  return total;
}

@riverpod
int cartTotalProcut(ref) {
  final cartProducrt = ref.watch(cartNotifierProvider);
  return cartProducrt.length;
}
