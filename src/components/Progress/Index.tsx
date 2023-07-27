import { useSelector } from 'react-redux'

import { Item } from './Item'
import { ReduxProps } from '@/storage'
import { ProgressProps } from '@/storage/modules/progress/type'

export function Progress() {
  const items = [
    { name: 'Produto', index: 1 },
    { name: 'Cliente', index: 2 },
    { name: 'Anexar arquivo', index: 3 },
    { name: 'Pagamentos', index: 4 },
    { name: 'Contrato', index: 5 },
  ]

  const { progress } = useSelector<ReduxProps, ProgressProps>(
    (state) => state.progress,
  )

  return (
    <div className="flex rounded-2xl overflow-hidden bg-transparent mt-8">
      <div className="flex md:hidden flex-1 items-center justify-between">
        <Item index={1} title="Produto" currentIndex={progress} />
        <Item index={2} title="Cliente" currentIndex={progress} />
        <Item index={3} title="Anexar arquivo" currentIndex={progress} />
        <Item index={4} title="Pagamentos" currentIndex={progress} />
        <Item index={5} title="Contrato" currentIndex={progress} />
      </div>

      <div className="w-full hidden md:block">
        <Item
          index={items.find((item) => item.index === progress)?.index ?? 1}
          title={items.find((item) => item.index === progress)?.name ?? ''}
          currentIndex={progress}
          // className="bg-red-500"
        />

        <div className="flex w-full justify-center mt-1">
          {items.map((item) => (
            <div
              key={item.index}
              className="w-5 h-5 flex items-center justify-center bg-white rounded-full"
            >
              <div
                className={`w-3 h-3 ${
                  item.index === progress ? ' bg-green-400' : 'bg-gray-300'
                }  rounded-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}