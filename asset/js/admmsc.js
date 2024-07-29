let isAdminAuthenticated = false;

function addNewSong() {
    const title = document.getElementById('new-song-title').value;
    const content = document.getElementById('new-song-content').value;
    const songList = document.getElementById('song-list');

    const songDiv = document.createElement('div');
    songDiv.className = 'song';

    const songImg = document.createElement('img');
    songImg.src = '/projetos/igreja - Montreal/asset/img/##';
    songImg.alt = title;

    const songContentDiv = document.createElement('div');

    const songTitleDiv = document.createElement('div');
    songTitleDiv.className = 'song-title';
    songTitleDiv.innerText = title;
    songTitleDiv.setAttribute('onclick', `toggleSongContent('${title}')`);

    const songContent = document.createElement('div');
    songContent.id = title;
    songContent.className = 'song-content';
    songContent.innerHTML = `<pre>${content}</pre>
                             <div class="favourite-songs">
                                 <button onclick="addToFavourites('${title}')">Adicionar aos Favoritos</button>
                             </div>`;

    songContentDiv.appendChild(songTitleDiv);
    songContentDiv.appendChild(songContent);
    songDiv.appendChild(songImg);
    songDiv.appendChild(songContentDiv);

    songList.appendChild(songDiv);

    // Limpar o formulário
    document.getElementById('new-song-title').value = '';
    document.getElementById('new-song-content').value = '';
}

function authenticateAdmin() {
    const password = document.getElementById('admin-password').value;
    // Substitua 'admin-password' pela senha real do administrador
    if (password === 'admin-password') {
        isAdminAuthenticated = true;
        document.getElementById('admin-actions').style.display = 'block';
    } else {
        alert('Senha incorreta!');
    }
}

function enableRemoveSongs() {
    const songs = document.getElementsByClassName('song');
    for (let i = 0; i < songs.length; i++) {
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.onclick = function() {
            if (isAdminAuthenticated) {
                songs[i].remove();
            } else {
                alert('Você não tem permissão para remover esta música.');
            }
        };
        songs[i].appendChild(removeButton);
    }
}

function toggleSongContent(songId) {
    const songContent = document.getElementById(songId);
    if (songContent.style.display === 'none' || songContent.style.display === '') {
        songContent.style.display = 'block';
    } else {
        songContent.style.display = 'none';
    }
}

function addToFavourites(songTitle) {
    alert(`"${songTitle}" adicionado aos favoritos!`);
}

function searchSong() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const songs = document.getElementsByClassName('song');
    for (let i = 0; i < songs.length; i++) {
        const songTitle = songs[i].getElementsByClassName('song-title')[0].innerText.toLowerCase();
        if (songTitle.includes(searchInput)) {
            songs[i].style.display = '';
        } else {
            songs[i].style.display = 'none';
        }
    }
}
