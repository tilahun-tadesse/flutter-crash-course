// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cart_provider.dart';

// **************************************************************************
// RiverpodGenerator
// **************************************************************************

String _$cartTotalHash() => r'ed6400bb10236f947e0a61b5bc8aa4b4112e0724';

/// See also [cartTotal].
@ProviderFor(cartTotal)
final cartTotalProvider = AutoDisposeProvider<int>.internal(
  cartTotal,
  name: r'cartTotalProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$cartTotalHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

typedef CartTotalRef = AutoDisposeProviderRef<int>;
String _$cartTotalProcutHash() => r'bc6ee0256b6d1b5c5d930d9bfcc234f6e4f539da';

/// See also [cartTotalProcut].
@ProviderFor(cartTotalProcut)
final cartTotalProcutProvider = AutoDisposeProvider<int>.internal(
  cartTotalProcut,
  name: r'cartTotalProcutProvider',
  debugGetCreateSourceHash: const bool.fromEnvironment('dart.vm.product')
      ? null
      : _$cartTotalProcutHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

typedef CartTotalProcutRef = AutoDisposeProviderRef<int>;
String _$cartNotifierHash() => r'9e0ce989ed5af28b82a06789fc93d2da7e3aeb9d';

/// See also [CartNotifier].
@ProviderFor(CartNotifier)
final cartNotifierProvider =
    AutoDisposeNotifierProvider<CartNotifier, Set<Product>>.internal(
  CartNotifier.new,
  name: r'cartNotifierProvider',
  debugGetCreateSourceHash:
      const bool.fromEnvironment('dart.vm.product') ? null : _$cartNotifierHash,
  dependencies: null,
  allTransitiveDependencies: null,
);

typedef _$CartNotifier = AutoDisposeNotifier<Set<Product>>;
// ignore_for_file: type=lint
// ignore_for_file: subtype_of_sealed_class, invalid_use_of_internal_member, invalid_use_of_visible_for_testing_member
