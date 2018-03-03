package ir.mafatih.mafatihserver.data

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import ir.mafatih.mafatihserver.model.Chapter
import java.io.BufferedReader
import java.io.File

object MafatihDataSource {

    private val mapper = jacksonObjectMapper()
    var mafatih: ArrayList<Chapter>

    init {
        val bufferedReader: BufferedReader = File("chapters.json").bufferedReader()
        val inputString = bufferedReader.use { it.readText() }
        mafatih = mapper.readValue(inputString)

    }
}