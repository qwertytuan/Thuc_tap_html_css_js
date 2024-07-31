
    function toast({ 
    title = '', 
    message = '', 
    type = 'Success',
    duration = 3000 }) {
        const main = document.getElementById('toast');

        if(main)
        {

            const toast = document.createElement('div');
            const icons={
                success: 'fas fa-check-circle',
                error: 'fas fa-exclamation-circle',
            };
            const icon=icons[type];
            // const delay = (duration / 1000).toFixed(2);
            toast.style.animation=`slideInLeft ease-in .3s, fadeOut linear 1s 2s forwards`;
            toast.classList.add('toast',`toast--${type}`);
            toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
    </div>

    <div class="toast__boddy">
        <h3 class="toast--title">${title}</h3>
        <p class="toast--msg">${message}</p>
    </div>

    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>
    `;
main.appendChild(toast);

const removeToast = setTimeout(function ()
 {
main.removeChild(toast);
}, duration+ 1000);


toast.onclick=function(e)
            {
                if(e.target.closest('.toast__close','.btn--clear'))
                {
                  main.removeChild(toast);
                  clearTimeout(removeToast);
                }
            }

        }

    }

  

    function showoktoast(){
        toast({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
        duration: 3000

    });

    }
    function shownotoktoast(){
        toast({
        title: 'NOT OK',
        message: 'This is a no no message',
        type: 'error',
        duration: 3000

    });

    }
  