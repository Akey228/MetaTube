function chooseTheme(element) {
    // Удалить класс active у всех элементов li
    document.querySelectorAll('.theme').forEach((item) => {
      item.classList.remove('active');
    });
  
    // Добавить класс active к нажатому элементу
    element.classList.add('active');
  }