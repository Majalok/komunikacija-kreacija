//import { ContentGenerator } from "../ContentGenerator"

//require("./src/ContentGenerator")

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { createRedirect } = actions

  createRedirect({
    fromPath: "/",
    toPath: "/omeni",
    isPermanent: true,
    redirectInBrowser: true,
  })

  const blogPost = require.resolve(`./src/templates/novica.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      component: blogPost,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  console.log("\n\n\n----- exports.onCreateNode")

  if (node.frontmatter != undefined) {
    //console.log("--- node: ", node)
    console.log("--- node.frontmatter.title: ", node.frontmatter.title)
    console.log("--- node.frontmatter.intro: ", node.frontmatter.intro)

    console.log("BLAAAA> Smile😀".replace(/\p{Emoji}/gu, ""))
    console.log("BLAAAA> Smile😀".replace(/\p{Emoji}/, ""))

    console.log("emoji=YES> ", node.frontmatter.intro.match(/\p{Emoji=yes}/))

    // ----- this should work ------
    let wink = node.frontmatter.intro.match("\u{1F609}")
    if (wink != null) {
      console.log("0emoji wink test> ", wink)
      let winkMatch = node.frontmatter.intro.indexOf(wink[0])
      console.log("0 wink match> ", winkMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F609}",
        "<img className='emoji-img' src='../icons/wink.png' width='20px' alt='' />"
      )
      let winkTemp = node.frontmatter.intro.replace("\u{1F609}", "$$$$$$")
      console.log("0 replace winkTemp> ", winkTemp)
    }

    let laugh = node.frontmatter.intro.match("\u{1F600}")
    if (laugh != null) {
      console.log("0emoji laugh test> ", laugh)
      let laughMatch = node.frontmatter.intro.indexOf(laugh[0])
      console.log("0 laugh match> ", laughMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F600}",
        "<img className='emoji-img' src='../icons/laugh.png' width='20px' alt='' />"
      )
      let winkTemp = node.frontmatter.intro.replace("\u{1F600}", "$$$$$$")
      console.log("0 replace winkTemp> ", winkTemp)
    }

    let like = node.frontmatter.intro.match("\u{1F44D}")
    if (like != null) {
      console.log("0emoji like test> ", like)
      let likeMatch = node.frontmatter.intro.indexOf(like[0])
      console.log("0 like match> ", likeMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F44D}",
        "<img className='emoji-img' src='../icons/like.png' width='20px' alt='' />"
      )
      let likeTemp = node.frontmatter.intro.replace("\u{1F44D}", "$$$$$$")
      console.log("0 replace likeTemp> ", likeTemp)
    }

    let smile = node.frontmatter.intro.match("\u{1F60A}")
    if (smile != null) {
      console.log("0emoji smile test> ", smile)
      let smileMatch = node.frontmatter.intro.indexOf(smile[0])
      console.log("0 like match> ", smileMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60A}",
        "<img className='emoji-img' src='../icons/blushed.png' width='20px' alt='' />"
      )
      let smileTemp = node.frontmatter.intro.replace("\u{1F642}", "$$$$$$")
      console.log("0 replace likeTemp> ", smileTemp)
    }

    let heart = node.frontmatter.intro.match("\u{2764}")
    if (heart != null) {
      console.log("0emoji heart test> ", heart)
      let heartMatch = node.frontmatter.intro.indexOf(heart[0])
      console.log("0 heart match> ", heartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{2764}",
        "<img className='emoji-img' src='../icons/heart.png' width='20px' alt='' />"
      )
      let heartTemp = node.frontmatter.intro.replace("\u{2764}", "$$$$$$")
      console.log("0 replace likeTemp> ", heartTemp)
    }

    let think = node.frontmatter.intro.match("\u{1F914}")
    if (think != null) {
      console.log("0emoji think test> ", think)
      let thinkMatch = node.frontmatter.intro.indexOf(think[0])
      console.log("0 think match> ", thinkMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F914}",
        "<img className='emoji-img' src='../icons/think.png' width='20px' alt='' />"
      )
      let thinkTemp = node.frontmatter.intro.replace("\u{1F914}", "$$$$$$")
      console.log("0 replace thinkTemp> ", thinkTemp)
    }
    let wondering = node.frontmatter.intro.match("\u{1F644}")
    if (wondering != null) {
      console.log("0emoji wondering test> ", wondering)
      let wonderingMatch = node.frontmatter.intro.indexOf(wondering[0])
      console.log("0 wondering match> ", wonderingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F644}",
        "<img className='emoji-img' src='../icons/wondering.png' width='20px' alt='' />"
      )
      let wonderingTemp = node.frontmatter.intro.replace("\u{1F644}", "$$$$$$")
      console.log("0 replace wonderingTemp> ", wonderingTemp)
    }
    let smirking = node.frontmatter.intro.match("\u{1F60F}")
    if (smirking != null) {
      console.log("0emoji smirking test> ", smirking)
      let smirkingMatch = node.frontmatter.intro.indexOf(smirking[0])
      console.log("0 smirking match> ", smirkingMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60F}",
        "<img className='emoji-img' src='../icons/smirk.png' width='20px' alt='' />"
      )
      let smirkingTemp = node.frontmatter.intro.replace("\u{1F60F}", "$$$$$$")
      console.log("0 replace smirkingTemp> ", smirkingTemp)
    }
    let sunglasses = node.frontmatter.intro.match("\u{1F60E}")
    if (sunglasses != null) {
      console.log("0emoji sunglasses test> ", sunglasses)
      let sunglassesMatch = node.frontmatter.intro.indexOf(sunglasses[0])
      console.log("0 sunglasses match> ", sunglassesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60E}",
        "<img className='emoji-img' src='../icons/sunglasses.png' width='20px' alt='' />"
      )
      let sunglassesTemp = node.frontmatter.intro.replace("\u{1F60E}", "$$$$$$")
      console.log("0 replace sunglassesTemp> ", sunglassesTemp)
    }
    let unamused = node.frontmatter.intro.match("\u{1F612}")

    if (unamused != null) {
      console.log("0emoji unamused test> ", unamused)
      let unamusedMatch = node.frontmatter.intro.indexOf(unamused[0])
      console.log("0 unamused match> ", unamusedMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F612}",
        "<img className='emoji-img' src='../icons/smile3.png' width='20px' alt='' />"
      )
      let unamusedTemp = node.frontmatter.intro.replace("\u{1F60E}", "$$$$$$")
      console.log("0 replace unamusedTemp> ", unamusedTemp)
    }
    let tongue = node.frontmatter.intro.match("\u{1F61C}")

    if (tongue != null) {
      console.log("0emoji tongue test> ", tongue)
      let tongueMatch = node.frontmatter.intro.indexOf(tongue[0])
      console.log("0 tongue match> ", tongueMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F61C}",
        "<img className='emoji-img' src='../icons/tongue.png' width='20px' alt='' />"
      )
    }

    let beamSmilingEyes = node.frontmatter.intro.match("\u{1F601}")

    if (beamSmilingEyes != null) {
      console.log("0emoji beamSmilingEyes test> ", beamSmilingEyes)
      let beamSmilingEyesMatch = node.frontmatter.intro.indexOf(beamSmilingEyes[0])
      console.log("0 beamSmilingEyes match> ", beamSmilingEyesMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F601}",
        "<img className='emoji-img' src='../icons/beamSmilingEyes.png' width='20px' alt='' />"
      )
    }

    let faceTearsOfJoy = node.frontmatter.intro.match("\u{1F602}")

    if (faceTearsOfJoy != null) {
      console.log("0emoji faceTearsOfJoy test> ", faceTearsOfJoy)
      let faceTearsOfJoyMatch = node.frontmatter.intro.indexOf(faceTearsOfJoy[0])
      console.log("0 faceTearsOfJoy match> ", faceTearsOfJoyMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F602}",
        "<img className='emoji-img' src='../icons/faceTearsOfJoy.png' width='20px' alt='' />"
      )
    }
    let faceEyesHeart = node.frontmatter.intro.match("\u{1F60D}")

    if (faceEyesHeart != null) {
      console.log("0emoji faceEyesHeart test> ", faceEyesHeart)
      let faceEyesHeartMatch = node.frontmatter.intro.indexOf(faceEyesHeart[0])
      console.log("0 faceEyesHeart match> ", faceEyesHeartMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F60D}",
        "<img className='emoji-img' src='../icons/faceEyesHeart.png' width='20px' alt='' />"
      )
    }
    let smileHalo = node.frontmatter.intro.match("\u{1F607}")

    if (smileHalo != null) {
      console.log("0emoji smileHalo test> ", smileHalo)
      let smileHaloMatch = node.frontmatter.intro.indexOf(smileHalo[0])
      console.log("0 smileHalo match> ", smileHaloMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F607}",
        "<img className='emoji-img' src='../icons/smileHalo.png' width='20px' alt='' />"
      )
    }
    let smileNeutral = node.frontmatter.intro.match("\u{1F610}")

    if (smileNeutral != null) {
      console.log("0emoji smileNeutral test> ", smileNeutral)
      let smileNeutralMatch = node.frontmatter.intro.indexOf(smileNeutral[0])
      console.log("0 smileNeutral match> ", smileNeutralMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F610}",
        "<img className='emoji-img' src='../icons/smileHalo.png' width='20px' alt='' />"
      )
    }
    let shusingFace = node.frontmatter.intro.match("\u{1F92B}")

    if (shusingFace != null) {
      console.log("0emoji shusingFace test> ", shusingFace)
      let smileNeutralMatch = node.frontmatter.intro.indexOf(shusingFace[0])
      console.log("0 shusingFace match> ", smileNeutralMatch)
      node.frontmatter.intro = node.frontmatter.intro.replace(
        "\u{1F92B}",
        "<img className='emoji-img' src='../icons/shusingFace.png' width='20px' alt='' />"
      )
    }
    // -------------------------- 1F92B

    console.log("1emoji wink test> ", node.frontmatter.intro.match("\u{1F609}"))
    console.log(
      "emoji wink test index> ",
      node.frontmatter.intro.match("\u{1F609}")
    )

    if (node.frontmatter != null) {
      let str = node.frontmatter.intro

      if (str != null) {
        console.log(
          "\n\nemoji match>",
          node.frontmatter.intro.match(
            /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g
          )
        )
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
