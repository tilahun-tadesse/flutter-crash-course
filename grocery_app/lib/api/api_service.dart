import 'dart:convert';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:grocery_app/config.dart';
import 'package:grocery_app/models/category.dart';
import 'package:http/http.dart' as http;

final apiService = Provider((ref) => ApiService());

class ApiService {
  static var client = http.Client();

  Future<List<Category>?> getCategories(int page, int pageSize) async {
    Map<String, String> requestHeaders = {
      'Content-Type': 'application/json',
    };
    print("home Page"); // This prints when the method is called

    // Construct the URL for the API endpoint
    Map<String, dynamic> queryString = {
      "page": page.toString(),
      "pageSize": pageSize.toString(),
    };
    print("apiUrl" + Config.apiUrl);
    print("apiCategory" + Config.categoryApi);
    var url = Uri.http(
      Config.apiUrl,
      Config.categoryApi,
      queryString,
    );

    // Print the constructed URL

    try {
      // Send GET request to the Node.js server
      var response = await client.get(url, headers: requestHeaders);
      print("1"); // This prints if the request is sent

      // Log the response for debugging
      print('Response status: ${response.statusCode}');
      print('Response body: ${response.body}');

      if (response.statusCode == 200) {
        var data = jsonDecode(response.body);
        print("Data received: ${data['data']['data']}");

        // Assuming your JSON response has a 'data' field containing the categories
        return categoryFromJson(data['data']['data'] ?? []);
      } else {
        print("Error fetching data: ${response.reasonPhrase}");
        return null;
      }
    } catch (e) {
      print('Exception occurred: $e');
      return null;
    }
  }
}
