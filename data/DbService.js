import * as SQLite from 'expo-sqlite'

export default function openDatabase() {
    const db = SQLite.openDatabase("wize.db");
    return db;
}