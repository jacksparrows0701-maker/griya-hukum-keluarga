var searchUrl = document.getElementById('searchData').getAttribute('data-url');
fetch(searchUrl)
  .then(function(response) { return response.json(); })
  .then(function(articles) {
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');

    input.addEventListener('input', function() {
      var query = this.value.toLowerCase().trim();
      if (query.length < 2) {
        results.innerHTML = '';
        return;
      }

      var matches = articles.filter(function(a) {
        return a.title.toLowerCase().indexOf(query) !== -1 ||
               a.description.toLowerCase().indexOf(query) !== -1 ||
               a.category.toLowerCase().indexOf(query) !== -1;
      });

      if (matches.length === 0) {
        results.innerHTML = '<p class="search-empty">Tidak ditemukan artikel yang cocok.</p>';
        return;
      }

      var html = '<p class="search-count">' + matches.length + ' artikel ditemukan:</p>';
      matches.forEach(function(a) {
        html += '<div class="search-item">';
        html += '<h3><a href="' + a.url + '">' + a.title + '</a></h3>';
        html += '<div class="meta">' + a.date;
        if (a.category) html += ' · ' + a.category;
        html += '</div>';
        html += '<p>' + a.description + '</p>';
        html += '</div>';
      });
      results.innerHTML = html;
    });
  });
