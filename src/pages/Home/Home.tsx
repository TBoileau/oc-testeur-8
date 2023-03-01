import Background from '../../assets/images/bg-home.png'
import {Banner} from '../../components/Banner/Banner'
import {Housing, HousingRaw} from '../../models/Housing'
import {useEffect, useState} from "react"
import {HousingCard} from '../../components/HousingCard/HousingCard'
import './Home.css'

export function Home(): JSX.Element {
  const [housingList, setHousingList] = useState<Housing[]>([])

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('/data.json')).json()
      setHousingList(data.map((housing: HousingRaw) => new Housing(housing)))
    }

    dataFetch()
  }, [])

  return (
    <>
      <Banner background={Background} title="Chez vous, partout et ailleurs"/>
      <div className="housing-list">
        {housingList.map(housing => (<HousingCard key={housing.id} housing={housing}/>))}
      </div>
    </>
  )
}
