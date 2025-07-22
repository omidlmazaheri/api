fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log("عنوان پست:", data.title);
  })
  .catch(error => {
    console.error("خطا در دریافت داده:", error);
  });
