 //0:길 1:골인 2:벽 3:빈공간   7:주인공의 초기위치 8:상자의 초기위치
		var map=[[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,2,0,0,0,2,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,2,8,0,0,2,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,2,2,2,0,0,8,2,2,3,3,3,3,3,3,3,3,3],
						[3,3,3,2,0,0,8,0,8,0,2,3,3,3,3,3,3,3,3,3],
						[3,2,2,2,0,2,0,2,2,0,2,3,3,3,2,2,2,2,2,2],
						[3,2,0,0,0,2,0,2,2,0,2,2,2,2,2,0,0,1,1,2],
						[3,2,0,8,0,0,8,0,0,0,0,7,0,0,0,0,0,1,1,2],
						[3,2,2,2,2,2,0,2,2,2,0,2,0,2,2,0,0,1,1,2],
						[3,3,3,3,3,2,0,0,0,0,0,2,2,2,2,2,2,2,2,2],
						[3,3,3,3,3,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
						],
						[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3],
						[3,3,3,2,1,1,0,0,2,0,0,0,0,0,2,2,2,3,3,3],
						[3,3,3,2,1,1,0,0,2,0,8,0,0,8,0,0,2,3,3,3],
						[3,3,3,2,1,1,0,0,2,8,2,2,2,2,0,0,2,3,3,3],
						[3,3,3,2,1,1,0,0,0,0,7,0,2,2,0,0,2,3,3,3],
						[3,3,3,2,1,1,0,0,2,0,2,0,0,8,0,2,2,3,3,3],
						[3,3,3,2,2,2,2,2,2,0,2,2,8,0,8,0,2,3,3,3],
						[3,3,3,3,3,2,0,8,0,0,8,0,8,0,8,0,2,3,3,3],
						[3,3,3,3,3,2,0,0,0,0,2,0,0,0,0,0,2,3,3,3],
						[3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
						],
						[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,3,3],
						[3,3,3,3,3,3,3,3,3,3,2,0,0,0,0,0,7,2,3,3],
						[3,3,3,3,3,3,3,3,3,3,2,0,8,2,8,0,2,2,3,3],
						[3,3,3,3,3,3,3,3,3,3,2,0,8,0,0,8,2,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,2,2,8,0,8,0,2,3,3,3],
						[3,3,2,2,2,2,2,2,2,2,2,0,8,0,2,0,2,2,2,3],
						[3,3,2,1,1,1,1,0,0,2,2,0,8,0,0,8,0,0,2,3],
						[3,3,2,2,1,1,1,0,0,0,0,8,0,0,8,0,0,0,2,3],
						[3,3,2,1,1,1,1,0,0,2,2,2,2,2,2,2,2,2,2,3],
						[3,3,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
						],
						[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,3],
						[3,3,3,3,3,3,3,3,3,3,3,2,0,0,1,1,1,1,2,3],
						[2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,1,1,1,2,3],
						[2,0,0,0,0,2,0,0,8,0,8,0,0,0,1,1,1,1,2,3],
						[2,0,8,8,8,2,8,0,0,8,0,2,0,0,1,1,1,1,2,3],
						[2,0,0,8,0,0,0,0,0,8,0,2,0,0,1,1,1,1,2,3],
						[2,0,8,8,0,2,8,0,8,0,8,2,2,2,2,2,2,2,2,3],
						[2,0,0,8,0,2,0,0,0,0,0,2,3,3,3,3,3,3,3,3],
						[2,2,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3],
						[2,0,0,0,0,2,0,0,0,0,2,2,3,3,3,3,3,3,3,3],
						[2,0,0,0,0,0,8,0,0,0,2,2,3,3,3,3,3,3,3,3],
						[2,0,0,8,8,2,8,8,0,0,7,2,3,3,3,3,3,3,3,3],
						[2,0,0,0,0,2,0,0,0,0,2,2,3,3,3,3,3,3,3,3],
						[2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3],
						[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
						]];