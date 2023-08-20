# kafka-bpmn



## Getting Started

```sh
docker-compose up -d
```



## Description

### Producer
Каждые 20 секунд отправляет в топик кафки сообщение

Не содержит смысловой нагрузки

### Consumer
При чтении сообщения в топике кафки запускает выполнение bpmn-движка для файла bpmn.xml

Содержимое сообщения не имеет значения

### KAFKA-UI
Просмотр сообщений Кафка [http://localhost:8090/](http://localhost:8090/ "KAFKA-UI")
