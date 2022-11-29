import { useEffect, useState } from 'react'

import io from 'socket.io-client'

import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'

import styles from './styles.module.scss'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

export function MessageList() {
  const [ messages, setMessages ] = useState<Message[]>([])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [ // do it this way when updating information in the state and the new information added depends on the previous information
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean)) // removes false values (undefined, empty, null) so as not to cause problems in the message list

        messagesQueue.shift() // removes the oldest item (first in the queue)
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api.get<Message[]>('messages').then(response => setMessages(response.data))
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt='DoWhile 2021' />

      <ul className={styles.messageList}>
        {messages.map(message => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}