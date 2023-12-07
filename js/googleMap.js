function redirectToGoogleMaps(address) {
    address= "Khu TT, BT, 21 TT26, Khu đô thị Văn Phú, Phú La, Hà Đông, Hanoi"
  // Địa chỉ cụ thể bạn muốn tìm kiếm trên Google Maps
  // Tạo đường link Google Maps với truy vấn tìm kiếm
  var googleMapsUrl =
    "https://www.google.com/maps/search/" + encodeURIComponent(address);

  // Chuyển hướng trang web đến Google Maps
  window.location.href = googleMapsUrl;
}
