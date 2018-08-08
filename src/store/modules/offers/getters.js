const getters = {
	getDatd: state => query => {
		// query.subj
        // query.genre
        // query.grade
        // query.search
		let list = []
		for(let item of state.data) {
			let subj = true,
				genre = true,
				grade = true,
				search = true;

			// console.log(query.grade)
			// console.log(item)

			if(query.subj && query.subj !== item.subject) {
				subj = false
			}

			if(query.genre && query.genre !== item.genre) {
				genre = false
			}

			if(query.grade && item.grade.split(';').indexOf(query.grade)) {
				grade = false
			}

			if(query.search && item.title.toLowerCase().indexOf(query.search.toLowerCase())) {
				search = false
			}

			// console.log(query.genre)
			// console.log(item.genre)
			// if(query.genre == item.genre && item.grade.split(';').find(query.grade)) {
			// 	console.log(item)
			// 	list.push(item)
			// }

			if(subj && genre && grade && search) {
				list.push(item)
			}
			
		}
		
    	return list
    }
}

export default getters
