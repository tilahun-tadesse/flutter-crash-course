import 'package:freezed_annotation/freezed_annotation.dart';
part 'pagination.freezed.dart';

@freezed
class PaginationModel with _$PaginationModel {
  const factory PaginationModel({
    required int page,
    required int pageSize,
  }) = _PaginationModel;
}
