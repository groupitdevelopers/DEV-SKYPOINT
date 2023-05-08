import React from "react"
import Button from '../components/button'

export const Box = props => {
  const anchorId = props.slice.primary.anchor_id

  function Boxes() {
    let response
    let boxes = props.slice.items

    switch (boxes.length) {
      case 1:
        response = (
          <div className="row">
              <div className="col m-0 p-0 mdV lgV">
                <div className="col p-0 box">
                  {boxes[0].flag && (
                    <div className={`flag bg-${boxes[0].flag_type}`}>
                      <div className='txt-white'>{boxes[0].flag_text}</div>
                    </div>
                  )}
                  <img
                    className="boxImage"
                    src={boxes[0].background.url}
                    alt={boxes[0].background.url}
                  />
                  <div className={`boxTitle txt-${boxes[0].text_colour}`}>{boxes[0].title}</div>
                  <Button
                    buttonText={boxes[0].button_text}
                    buttonType={boxes[0].button_type}
                    buttonLinkUrl={boxes[0].link.url}
                    buttonLinkUid={boxes[0].link.uid}
                    buttonAnchorLink={boxes[0].anchor_link}
                    accessoPromo={boxes[0].accesso_promo_code}
                    accessoKeyword={boxes[0].accesso_keyword}
                    accessoPackageId={boxes[0].accesso_packageid}
                  />
                </div>
              </div>
              <div className="col m-0 p-0 xsV smV">
                <div className="col p-0 smBox">
                  {boxes[0].flag && (
                    <div className={`flag bg-${boxes[0].flag_type}`}>
                      <div className='txt-white'>{boxes[0].flag_text}</div>
                    </div>
                  )}
                  <img
                    className="boxImage"
                    src={boxes[0].background.url}
                    alt={boxes[0].background.url}
                  />
                  <div className={`boxTitle txt-${boxes[0].text_colour}`}>{boxes[0].title}</div>
                  <Button
                    buttonText={boxes[0].button_text}
                    buttonType={boxes[0].button_type}
                    buttonLinkUrl={boxes[0].link.url}
                    buttonLinkUid={boxes[0].link.uid}
                    buttonAnchorLink={boxes[0].anchor_link}
                    accessoPromo={boxes[0].accesso_promo_code}
                    accessoKeyword={boxes[0].accesso_keyword}
                    accessoPackageId={boxes[0].accesso_packageid}
                  />
                </div>
              </div>
          </div>
        )
        break
      case 2:
        response = (
          <>
              <div className="row mdV lgV">
                <div className="col_half box_padding_right">
                  <div className="col p-0 box">
                    {boxes[0].flag && (
                      <div className={`flag bg-${boxes[0].flag_type}`}>
                        <div className='txt-white'>{boxes[0].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[0].background.url}
                      alt={boxes[0].background.url}
                    />
                    <div className={`boxTitle twoLeft txt-${boxes[0].text_colour}`}>
                      {boxes[0].title}
                    </div>
                    <Button
                      buttonText={boxes[0].button_text}
                      buttonType={boxes[0].button_type}
                      buttonLinkUrl={boxes[0].link.url}
                      buttonLinkUid={boxes[0].link.uid}
                      buttonAnchorLink={boxes[0].anchor_link}
                      accessoPromo={boxes[0].accesso_promo_code}
                      accessoKeyword={boxes[0].accesso_keyword}
                      accessoPackageId={boxes[0].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_half box_padding_left">
                  <div className="col p-0 box">
                    {boxes[1].flag && (
                      <div className={`flag bg-${boxes[1].flag_type}`}>
                        <div className='txt-white'>{boxes[1].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[1].background.url}
                      alt={boxes[1].background.url}
                    />
                    <div className={`boxTitle twoRight txt-${boxes[1].text_colour}`}>
                      {boxes[1].title}
                    </div>
                    <Button
                      buttonText={boxes[1].button_text}
                      buttonType={boxes[1].button_type}
                      buttonLinkUrl={boxes[1].link.url}
                      buttonLinkUid={boxes[1].link.uid}
                      buttonAnchorLink={boxes[1].anchor_link}
                      accessoPromo={boxes[1].accesso_promo_code}
                      accessoKeyword={boxes[1].accesso_keyword}
                      accessoPackageId={boxes[1].accesso_packageid}
                    />
                  </div>
                </div>
              </div>
                <div className="row xsV smV">
                  <div className="col_half box_padding_right">
                    <div className="col p-0 smBox">
                      {boxes[0].flag && (
                        <div className={`flag bg-${boxes[0].flag_type}`}>
                          <div className='txt-white'>{boxes[0].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[0].background.url}
                        alt={boxes[0].background.url}
                      />
                      <div className={`boxTitle txt-${boxes[0].text_colour}`}>{boxes[0].title}</div>
                      <Button
                        buttonText={boxes[0].button_text}
                        buttonType={boxes[0].button_type}
                        buttonLinkUrl={boxes[0].link.url}
                        buttonLinkUid={boxes[0].link.uid}
                        buttonAnchorLink={boxes[0].anchor_link}
                        accessoPromo={boxes[0].accesso_promo_code}
                        accessoKeyword={boxes[0].accesso_keyword}
                        accessoPackageId={boxes[0].accesso_packageid}
                      />
                    </div>
                  </div>

                  <div className="col_half box_padding_left">
                    <div className="col p-0 smBox">
                      {boxes[1].flag && (
                        <div className={`flag bg-${boxes[1].flag_type}`}>
                          <div className='txt-white'>{boxes[1].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[1].background.url}
                        alt={boxes[1].background.url}
                      />
                      <div className={`boxTitle txt-${boxes[1].text_colour}`}>{boxes[1].title}</div>
                      <Button
                        buttonText={boxes[1].button_text}
                        buttonType={boxes[1].button_type}
                        buttonLinkUrl={boxes[1].link.url}
                        buttonLinkUid={boxes[1].link.uid}
                        buttonAnchorLink={boxes[1].anchor_link}
                        accessoPromo={boxes[1].accesso_promo_code}
                        accessoKeyword={boxes[1].accesso_keyword}
                        accessoPackageId={boxes[1].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
          </>
        )
        break
      case 3:
        response = (
          <>
                <div className="row xsV smV">
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[0].flag && (
                        <div className={`flag bg-${boxes[0].flag_type}`}>
                          <div className='txt-white'>{boxes[0].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[0].background.url}
                        alt={boxes[0].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[0].text_colour}`}>
                        {boxes[0].title}
                      </div>
                      <Button
                        buttonText={boxes[0].button_text}
                        buttonType={boxes[0].button_type}
                        buttonLinkUrl={boxes[0].link.url}
                        buttonLinkUid={boxes[0].link.uid}
                        buttonAnchorLink={boxes[0].anchor_link}
                        accessoPromo={boxes[0].accesso_promo_code}
                        accessoKeyword={boxes[0].accesso_keyword}
                        accessoPackageId={boxes[0].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col box_padding_right">
                    <div className="col p-0 smBox">
                      {boxes[1].flag && (
                        <div className={`smFlag bg-${boxes[1].flag_type}`}>
                          <div className='txt-white'>{boxes[1].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[1].background.url}
                        alt={boxes[1].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[1].text_colour}`}>
                        {boxes[1].title}
                      </div>
                      <Button
                        buttonText={boxes[1].button_text}
                        buttonType={boxes[1].button_type}
                        buttonLinkUrl={boxes[1].link.url}
                        buttonLinkUid={boxes[1].link.uid}
                        buttonAnchorLink={boxes[1].anchor_link}
                        accessoPromo={boxes[1].accesso_promo_code}
                        accessoKeyword={boxes[1].accesso_keyword}
                        accessoPackageId={boxes[1].accesso_packageid}
                      />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[2].flag && (
                        <div className={`smFlag bg-${boxes[2].flag_type}`}>
                          <div className='txt-white'>{boxes[2].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[2].background.url}
                        alt={boxes[2].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[2].text_colour}`}>
                        {boxes[2].title}
                      </div>
                      <Button
                        buttonText={boxes[2].button_text}
                        buttonType={boxes[2].button_type}
                        buttonLinkUrl={boxes[2].link.url}
                        buttonLinkUid={boxes[2].link.uid}
                        buttonAnchorLink={boxes[2].anchor_link}
                        accessoPromo={boxes[2].accesso_promo_code}
                        accessoKeyword={boxes[2].accesso_keyword}
                        accessoPackageId={boxes[2].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
              <div className="row mdV lgV">
                <div className="col_one-third box_padding_right">
                  <div className="col p-0 box">
                    {boxes[0].flag && (
                      <div className={`flag bg-${boxes[0].flag_type}`}>
                        <div className='txt-white'>{boxes[0].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[0].background.url}
                      alt={boxes[0].background.url}
                    />
                    <div className={`boxTitle threeLeft txt-${boxes[0].text_colour}`}>
                      {boxes[0].title}
                    </div>
                    <Button
                      buttonText={boxes[0].button_text}
                      buttonType={boxes[0].button_type}
                      buttonLinkUrl={boxes[0].link.url}
                      buttonLinkUid={boxes[0].link.uid}
                      buttonAnchorLink={boxes[0].anchor_link}
                      accessoPromo={boxes[0].accesso_promo_code}
                      accessoKeyword={boxes[0].accesso_keyword}
                      accessoPackageId={boxes[0].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_one-third box_padding">
                  <div className="col p-0 box">
                    {boxes[1].flag && (
                      <div className={`flag bg-${boxes[1].flag_type}`}>
                        <div className='txt-white'>{boxes[1].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[1].background.url}
                      alt={boxes[1].background.url}
                    />
                    <div className={`boxTitle threeCenter txt-${boxes[1].text_colour}`}>
                      {boxes[1].title}
                    </div>
                    <Button
                      buttonText={boxes[1].button_text}
                      buttonType={boxes[1].button_type}
                      buttonLinkUrl={boxes[1].link.url}
                      buttonLinkUid={boxes[1].link.uid}
                      buttonAnchorLink={boxes[1].anchor_link}
                      accessoPromo={boxes[1].accesso_promo_code}
                      accessoKeyword={boxes[1].accesso_keyword}
                      accessoPackageId={boxes[1].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_one-third box_padding_left">
                  <div className="col p-0 box">
                    {boxes[2].flag && (
                      <div className={`flag bg-${boxes[2].flag_type}`}>
                        <div className='txt-white'>{boxes[2].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[2].background.url}
                      alt={boxes[2].background.url}
                    />
                    <div className={`boxTitle threeRight txt-${boxes[2].text_colour}`}>
                      {boxes[2].title}
                    </div>
                    <Button
                      buttonText={boxes[2].button_text}
                      buttonType={boxes[2].button_type}
                      buttonLinkUrl={boxes[2].link.url}
                      buttonLinkUid={boxes[2].link.uid}
                      buttonAnchorLink={boxes[2].anchor_link}
                      accessoPromo={boxes[2].accesso_promo_code}
                      accessoKeyword={boxes[2].accesso_keyword}
                      accessoPackageId={boxes[2].accesso_packageid}
                    />
                  </div>
                </div>
              </div>
          </>
        )
        break
      case 4:
        response = (
          <>
              <div className="xsV">
                <div className="row ">
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[0].flag && (
                        <div className={`smFlag bg-${boxes[0].flag_type}`}>
                          <div className='txt-white'>{boxes[0].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[0].background.url}
                        alt={boxes[0].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[0].text_colour}`}>
                        {boxes[0].title}
                      </div>
                      <Button
                        buttonText={boxes[0].button_text}
                        buttonType={boxes[0].button_type}
                        buttonLinkUrl={boxes[0].link.url}
                        buttonLinkUid={boxes[0].link.uid}
                        buttonAnchorLink={boxes[0].anchor_link}
                        accessoPromo={boxes[0].accesso_promo_code}
                        accessoKeyword={boxes[0].accesso_keyword}
                        accessoPackageId={boxes[0].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[1].flag && (
                        <div className={`smFlag bg-${boxes[1].flag_type}`}>
                          <div className='txt-white'>{boxes[1].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[1].background.url}
                        alt={boxes[1].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[1].text_colour}`}>
                        {boxes[1].title}
                      </div>
                      <Button
                        buttonText={boxes[1].button_text}
                        buttonType={boxes[1].button_type}
                        buttonLinkUrl={boxes[1].link.url}
                        buttonLinkUid={boxes[1].link.uid}
                        buttonAnchorLink={boxes[1].anchor_link}
                        accessoPromo={boxes[1].accesso_promo_code}
                        accessoKeyword={boxes[1].accesso_keyword}
                        accessoPackageId={boxes[1].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[2].flag && (
                        <div className={`smFlag bg-${boxes[2].flag_type}`}>
                          <div className='txt-white'>{boxes[2].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[2].background.url}
                        alt={boxes[2].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[2].text_colour}`}>
                        {boxes[2].title}
                      </div>
                      <Button
                        buttonText={boxes[2].button_text}
                        buttonType={boxes[2].button_type}
                        buttonLinkUrl={boxes[2].link.url}
                        buttonLinkUid={boxes[2].link.uid}
                        buttonAnchorLink={boxes[2].anchor_link}
                        accessoPromo={boxes[2].accesso_promo_code}
                        accessoKeyword={boxes[2].accesso_keyword}
                        accessoPackageId={boxes[2].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0">
                    <div className="col p-0 smBox">
                      {boxes[3].flag && (
                        <div className={`smFlag bg-${boxes[3].flag_type}`}>
                          <div className='txt-white'>{boxes[3].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[3].background.url}
                        alt={boxes[3].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[3].text_colour}`}>
                        {boxes[3].title}
                      </div>
                      <Button
                        buttonText={boxes[3].button_text}
                        buttonType={boxes[3].button_type}
                        buttonLinkUrl={boxes[3].link.url}
                        buttonLinkUid={boxes[3].link.uid}
                        buttonAnchorLink={boxes[3].anchor_link}
                        accessoPromo={boxes[3].accesso_promo_code}
                        accessoKeyword={boxes[3].accesso_keyword}
                        accessoPackageId={boxes[3].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="smV">
                <div className="row">
                  <div className="col box_padding_right">
                    <div className="col p-0 smBox">
                      {boxes[0].flag && (
                        <div className={`smFlag bg-${boxes[0].flag_type}`}>
                          <div className='txt-white'>{boxes[0].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[0].background.url}
                        alt={boxes[0].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[0].text_colour}`}>
                        {boxes[0].title}
                      </div>
                      <Button
                        buttonText={boxes[0].button_text}
                        buttonType={boxes[0].button_type}
                        buttonLinkUrl={boxes[0].link.url}
                        buttonLinkUid={boxes[0].link.uid}
                        buttonAnchorLink={boxes[0].anchor_link}
                        accessoPromo={boxes[0].accesso_promo_code}
                        accessoKeyword={boxes[0].accesso_keyword}
                        accessoPackageId={boxes[0].accesso_packageid}
                      />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="col p-0 smBox" href={boxes[1].link.url}>
                      {boxes[1].flag && (
                        <div className={`smFlag bg-${boxes[1].flag_type}`}>
                          <div className='txt-white'>{boxes[1].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[1].background.url}
                        alt={boxes[1].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[1].text_colour}`}>
                        {boxes[1].title}
                      </div>
                      <Button
                        buttonText={boxes[1].button_text}
                        buttonType={boxes[1].button_type}
                        buttonLinkUrl={boxes[1].link.url}
                        buttonLinkUid={boxes[1].link.uid}
                        buttonAnchorLink={boxes[1].anchor_link}
                        accessoPromo={boxes[1].accesso_promo_code}
                        accessoKeyword={boxes[1].accesso_keyword}
                        accessoPackageId={boxes[1].accesso_packageid}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col box_padding_right">
                    <div className="col p-0 smBox">
                      {boxes[2].flag && (
                        <div className={`smFlag bg-${boxes[2].flag_type}`}>
                          <div className='txt-white'>{boxes[2].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[2].background.url}
                        alt={boxes[2].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[2].text_colour}`}>
                        {boxes[2].title}
                      </div>
                      <Button
                        buttonText={boxes[2].button_text}
                        buttonType={boxes[2].button_type}
                        buttonLinkUrl={boxes[2].link.url}
                        buttonLinkUid={boxes[2].link.uid}
                        buttonAnchorLink={boxes[2].anchor_link}
                        accessoPromo={boxes[2].accesso_promo_code}
                        accessoKeyword={boxes[2].accesso_keyword}
                        accessoPackageId={boxes[2].accesso_packageid}
                      />
                    </div>
                  </div>
                  <div className="col p-0">
                    <div className="col p-0 smBox" href={boxes[3].link.url}>
                      {boxes[3].flag && (
                        <div className={`smFlag bg-${boxes[3].flag_type}`}>
                          <div className='txt-white'>{boxes[3].flag_text}</div>
                        </div>
                      )}
                      <img
                        className="boxImage"
                        src={boxes[3].background.url}
                        alt={boxes[3].background.url}
                      />
                      <div className={`boxTitle twoLeft txt-${boxes[3].text_colour}`}>
                        {boxes[3].title}
                      </div>
                      <Button
                      buttonText={boxes[3].button_text}
                      buttonType={boxes[3].button_type}
                      buttonLinkUrl={boxes[3].link.url}
                      buttonLinkUid={boxes[3].link.uid}
                      buttonAnchorLink={boxes[3].anchor_link}
                      accessoPromo={boxes[3].accesso_promo_code}
                      accessoKeyword={boxes[3].accesso_keyword}
                      accessoPackageId={boxes[3].accesso_packageid}
                    />
                    </div>
                  </div>
                </div>
              </div>
            <div className="mdV lgV">
              <div className="row">
                <div className="col_quarter box_padding_right">
                  <div className="col p-0 box">
                    {boxes[0].flag && (
                      <div className={`flag bg-${boxes[0].flag_type}`}>
                        <div className='txt-white'>{boxes[0].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[0].background.url}
                      alt={boxes[0].background.url}
                    />
                    <div className={`boxTitle txt-${boxes[0].text_colour}`}>{boxes[0].title}</div>
                    <Button
                      buttonText={boxes[0].button_text}
                      buttonType={boxes[0].button_type}
                      buttonLinkUrl={boxes[0].link.url}
                      buttonLinkUid={boxes[0].link.uid}
                      buttonAnchorLink={boxes[0].anchor_link}
                      accessoPromo={boxes[0].accesso_promo_code}
                      accessoKeyword={boxes[0].accesso_keyword}
                      accessoPackageId={boxes[0].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_quarter box_padding">
                  <div className="col p-0 box">
                    {boxes[1].flag && (
                      <div className={`flag bg-${boxes[1].flag_type}`}>
                        <div className='txt-white'>{boxes[1].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[1].background.url}
                      alt={boxes[1].background.url}
                    />
                    <div className={`boxTitle txt-${boxes[1].text_colour}`}>{boxes[1].title}</div>
                    <Button
                      buttonText={boxes[1].button_text}
                      buttonType={boxes[1].button_type}
                      buttonLinkUrl={boxes[1].link.url}
                      buttonLinkUid={boxes[1].link.uid}
                      buttonAnchorLink={boxes[1].anchor_link}
                      accessoPromo={boxes[1].accesso_promo_code}
                      accessoKeyword={boxes[1].accesso_keyword}
                      accessoPackageId={boxes[1].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_quarter box_padding">
                  <div className="col p-0 box">
                    {boxes[2].flag && (
                      <div className={`flag bg-${boxes[2].flag_type}`}>
                        <div className='txt-white'>{boxes[2].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[2].background.url}
                      alt={boxes[2].background.url}
                    />
                    <div className={`boxTitle txt-${boxes[2].text_colour}`}>{boxes[2].title}</div>
                    <Button
                      buttonText={boxes[2].button_text}
                      buttonType={boxes[2].button_type}
                      buttonLinkUrl={boxes[2].link.url}
                      buttonLinkUid={boxes[2].link.uid}
                      buttonAnchorLink={boxes[2].anchor_link}
                      accessoPromo={boxes[2].accesso_promo_code}
                      accessoKeyword={boxes[2].accesso_keyword}
                      accessoPackageId={boxes[2].accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_quarter box_padding_left">
                  <div className="col p-0 box">
                    {boxes[3].flag && (
                      <div className={`flag bg-${boxes[3].flag_type}`}>
                        <div className='txt-white'>{boxes[3].flag_text}</div>
                      </div>
                    )}
                    <img
                      className="boxImage"
                      src={boxes[3].background.url}
                      alt={boxes[3].background.url}
                    />
                    <div className={`boxTitle txt-${boxes[3].text_colour}`}>{boxes[3].title}</div>
                    <Button
                      buttonText={boxes[3].button_text}
                      buttonType={boxes[3].button_type}
                      buttonLinkUrl={boxes[3].link.url}
                      buttonLinkUid={boxes[3].link.uid}
                      buttonAnchorLink={boxes[3].anchor_link}
                      accessoPromo={boxes[3].accesso_promo_code}
                      accessoKeyword={boxes[3].accesso_keyword}
                      accessoPackageId={boxes[3].accesso_packageid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
        break
      default:
        response = <h2>No Boxes</h2>
    }

    return response
  }
  return (
    <section
      className="container boxWrapper"
      id={anchorId}
    >
      <Boxes />
    </section>
  )
}
