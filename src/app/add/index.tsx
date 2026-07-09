import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View, Alert } from "react-native"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

import { Button } from "@/components/button"
import { Categories } from "@/components/categories"
import { Input } from "@/components/input"

export default function Add() {
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  function handleAdd() {
    if(!category){
      return Alert.alert("Categoria", "Selecione uma categoria")
    }

    if(!name.trim()){
      return Alert.alert("Nome", "Informe um nome")
    }

    if (!url.trim()) {
      return Alert.alert("Url", "Informe uma Url")
    }

    console.log({ category, name, url })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[600]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}
