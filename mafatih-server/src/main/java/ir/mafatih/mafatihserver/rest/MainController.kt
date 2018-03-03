package ir.mafatih.mafatihserver.rest

import ir.mafatih.mafatihserver.data.MafatihDataSource
import ir.mafatih.mafatihserver.model.Article
import ir.mafatih.mafatihserver.model.Chapter
import ir.mafatih.mafatihserver.model.Section
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RestController

@RestController
class MainController {

    @GetMapping("/api/context")
    fun getContext(): List<Chapter> {
        return MafatihDataSource.mafatih.map { it ->
            Chapter(it.id, it.title, it.sections.map { it ->
                Section(it.id, it.title, it.articles.map { it ->
                    Article(it.id, it.title, "", arrayListOf())
                })
            })
        }
    }

    @GetMapping("/api/article/{chapterId}/{sectionId}/{articleId}")
    fun getArticle(@PathVariable chapterId: Int,
                   @PathVariable sectionId: Int,
                   @PathVariable articleId: Int): Article {
        return MafatihDataSource.mafatih[chapterId].sections[sectionId].articles[articleId]
    }

    @GetMapping("/api/search/{query}")
    fun searchFor(@PathVariable query: String) : List<Chapter> {
        val sections = MafatihDataSource.mafatih[0].sections.filter { it -> it.title.contains(query) }
        return arrayListOf(Chapter(0, MafatihDataSource.mafatih[0].title, sections))
    }
}