import './App.css';

function App() {
  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='px-2'>
          <img src='https://i.imgur.com/pTWhpOu.jpg' className='h-12'/>
        </div>
        <div>
          <img src='https://i.imgur.com/G4qjaEK.jpg' className='h-12 ml-[200px]'/>
        </div>
      </div>
      <div className='bg-blue-900 grid grid-cols-2 text-white'>
        <div className='px-4 py-2 font-bold'>건강상태 자가진단</div>
        <div>
          <img src='https://i.imgur.com/QazK9p2.jpg' className='h-10 ml-[160px]'/>
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
      <div className='grid grid-cols-3 bg-blue-300'>
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
        <div className='pb-2'>*()에는 참여시간과 로그인 계정이 표시됩니다</div>
        <div className='grid grid-cols-5 h-24'>
          <div className='col-span-4 bg-gray-500 mr-2 rounded-lg px-4'>
            <img src='https://i.imgur.com/PJHBuTH.jpg' className='h-[95px]'/>
          </div>
          <div className='col-span-1 bg-green-600 rounded-lg'>
            <img src='https://i.imgur.com/X6CDSj6.jpg' className='rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
