TodeSplat`


element Food {

	colour "brown"
	emissive "brown"
	category "life"

	state "solid"
	
	input l ({space, args}) => {
		if (!space) return false
		if (!space.atom) return true
		if (space.atom.type.state != "liquid") return false
		return args.swap = space.atom
	}
	
	output l ({space, swap}) => Space.setAtom(space, swap)
	
	rule {
		@ => l
		l    @
	}
	
	rule xz {
		@  => l
		#l    #@
	}
	
}




`