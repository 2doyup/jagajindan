import './App.css';

function App() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='px-2'>
          <img src='https://i.imgur.com/pTWhpOu.jpg' className='h-12'/>
        </div>
        <div className='text-left'>
          <img src='https://i.imgur.com/G4qjaEK.jpg'className='h-12 ml-[193px]'/>
        </div>
      </div>
      <div className='bg-indigo-900 grid grid-cols-2 text-white'>
        <div className='px-4 py-2 font-bold'>건강상태 자가진단</div>
        <div>
          <img src='https://i.imgur.com/QazK9p2.jpg' className='h-10 ml-[145px] mr-2'/>
        </div>
      </div>
      <div className='grid grid-cols-3 text-center'>
        <div>
          <img src='https://i.imgur.com/BK20Jox.jpg' className='h-[70px] ml-4'></img>
        </div>
        <div>
        <img src='https://i.imgur.com/nBZVszO.jpg' className='h-[70px] ml-2'/>
        </div>
        <div>
        <img src='https://i.imgur.com/H9G6pek.jpg' className='h-[70px] ml-2'/>
        </div>
      </div>
      <div className='grid grid-cols-3 bg-blue-300 text-center'>
        <div className='p-10 m-2 bg-white rounded-lg'>
          <img src='https://i.imgur.com/pIveTrF.jpg'/>
        </div>
        <div className='p-10 m-2 bg-white rounded-lg'>
        <img src='https://i.imgur.com/K8CZ2lT.jpg'/>
        </div>
        <div className='p-10 m-2 bg-white rounded-lg'>
        <img src='https://i.imgur.com/Zw1UtkS.jpg'/>
        </div>
        <div className='p-10 m-2 bg-white rounded-lg'>
        <img src='https://i.imgur.com/UDxAVwl.jpg'/>
        </div>
        <div className='p-10 m-2 bg-white rounded-lg'>
        <img src='https://i.imgur.com/s6pixfe.jpg'/>
        </div>
        <div className='p-10 m-2 bg-white rounded-lg'>
        <img src='https://i.imgur.com/5SqdVHd.jpg'/>
        </div>
      </div>
      <div className='px-4'>
        <div className='pt-3 pb-2 font-bold text-blue-900'>참여자 목록</div>
        <div className='pb-2'>※ ( )에는 참여시간과 로그인 계정이 표시됩니다</div>
        <div className='grid grid-cols-5 h-[95px] text-center'>
          <div className='col-span-4 bg-gray-500 mr-2 rounded-lg px-4'>
            <img src='https://i.imgur.com/PJHBuTH.jpg' className='h-[95px]'/>
          </div>
          <div className='col-span-1 bg-green-600 rounded-lg'>
            <img src='https://i.imgur.com/X6CDSj6.jpg' className='rounded-lg h-[95px]'/>
          </div>
        </div>
      </div>
      <div><br></br>이거 만들때 크롬 창 세로는 최대로 하고 가로는 최대로 줄이고 만들었습니다. 그렇게 봐주시면 감사하겠습니다. </div>
      <div><br></br>css에서는 text-align-center이나 text-align-left하면 사진도
        왼쪽 정렬이 됐던 것으로 기억하는데 여기서 text-center나 text-left를 해도 사진 위치가 바뀌지가 않아서 그냥 px값으로 넣었어요. 혹시 어떻게
        하는지 아시면 좀 알려주세요. 그리고 버튼 6개 있는 부분도 저 사진을 더 꽉차게 하고싶어서 h-[]에 값을 계속 넣어봤는데 안되더라고요.
        저거는 원래 일정 크기 이상이 안되는건가요?
      </div>
    </div>
  );
}

export default App;
