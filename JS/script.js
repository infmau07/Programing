function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const arrow = button.querySelector('.accordion-arrow');
            const isExpanded = content.classList.contains('expanded');
            
            // Cerrar todos los acordeones abiertos
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('expanded');
            });
            
            document.querySelectorAll('.accordion-arrow').forEach(arr => {
                arr.classList.remove('expanded');
            });
            
            // Si no estaba expandido, expandir este
            if (!isExpanded) {
                content.classList.add('expanded');
                arrow.classList.add('expanded');
            }
        }

        // Cerrar acordeón al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.accordion-item')) {
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('expanded');
                });
                
                document.querySelectorAll('.accordion-arrow').forEach(arr => {
                    arr.classList.remove('expanded');
                });
            }
        });