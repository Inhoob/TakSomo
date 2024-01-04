export const dummyUser = {
  id: 1,
  username: '박인후',
  grade: 10,
  isClub: true,
  image: 'https://unsplash.it/400/400?image=1',
  joinedMeeting: [
    {
      id: 1,
      title: 'Meeting 1',
    },
    {
      id: 2,
      title: 'Meeting 2',
    },
  ],
  boards: [
    {
      id: 1,
      title: 'Board 1',
    },
    {
      id: 2,
      title: 'Board 2',
    },
  ],
  sex: 'male',
  birthday: '19951111',
  province: '서울',
  distinct: '강서구',
  racketGripStyle: '셰이크핸드',
  selfIntroduction:
    '저는 30살 박인후입니다. 앞으로 잘부탁드립니다. 40글자까지 가능해요..',
};

// export class User extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   username: string;

//   @Column()
//   password: string;

// 	@Column()
// 	grade: number;

// 	@Column()
// 	isClub: boolean;

// 	@Column()
// 	grade: number;

// 	@Column(()=> Meeting, (Meeting)=> meeting.user, {eager: true})
// 	joinedMeeting: Meeting[]

//   @OneToMany(() => Board, (board) => board.user, { eager: true })
//   boards: Board[];
// }
