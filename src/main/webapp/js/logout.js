/**
 * 
 */

function logout() {
	let id = sessionStorage.getItem('loginToken');

	if(id != null){
		
		fetch('demo/access' + '?tokenId=' + id, {
		method: 'delete'
		})
		.then(response => {
			if (response.ok) {
				sessionStorage.removeItem('loginToken');
				setVisibilityHeader(false);
				location.reload();
				setVisibility("find-ride-container", false);
				showMap();
			}
		})
		.catch(error => console.error('Error:', error));
	}
		
}