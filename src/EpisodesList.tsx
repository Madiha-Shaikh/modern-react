import React from 'react'
import { IEpisode } from './interfaces'

export default function EpsiodeList(props: any): Array<JSX.Element> {
  const {episodes, toggleFavAction, favourites, store} =  props;
  const { state, dispatch } = store;
  return episodes.map((episode: any) => {
    return (
      <section key={episode.id} className='episode-box'>
        <img src={episode?.image?.medium} alt={'Rick and Morty ${episode.name}'}/>
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div>Season: {episode.season} Number: {episode.number}</div>
          <button type='button' onClick={() => toggleFavAction(state, dispatch, episode)}>{favourites.find((fav: IEpisode) => fav.id === episode.id) 
          ? 'Unfav' 
          : 'Fav'}</button>
        </section>
      </section>
    )
  })
}
