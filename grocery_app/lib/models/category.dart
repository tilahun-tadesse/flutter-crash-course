import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:grocery_app/config.dart';
part 'category.freezed.dart';
part 'category.g.dart';

List<Category> categoryFromJson(dynamic str) =>
    List<Category>.from(str.map((x) => Category.fromJson(x)));

@freezed
abstract class Category with _$Category {
  factory Category(
      {required String categoryId,
      required String categoryName,
      required String categoryDescription,
      required String? categoryImage}) = _Category;

  factory Category.fromJson(Map<String, dynamic> json) {
    return Category(
      categoryId: json['categoryId'] ?? '', // Provide a default value if null
      categoryName: json['categoryName'] ?? '',
      categoryDescription: json['categoryDescription'] ??
          'No description available', // Default value
      categoryImage: json['categoryImage'] as String?, // Keep it nullable
    );
  }
}

extension CategoryExt on Category {
  String get fullImagePath => Config.imageURL + (categoryImage ?? '');
}
